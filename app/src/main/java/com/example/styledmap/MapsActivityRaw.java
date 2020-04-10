package com.example.styledmap;

import android.content.res.Resources;
import android.graphics.Color;
import android.location.Location;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.CircleOptions;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MapStyleOptions;
import com.google.android.gms.maps.model.MarkerOptions;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.StringWriter;
import java.io.Writer;

/**
 * A styled map using JSON styles from a raw resource.
 */
public class MapsActivityRaw extends AppCompatActivity
        implements OnMapReadyCallback, GoogleMap.OnMyLocationButtonClickListener,
        GoogleMap.OnMyLocationClickListener {

    private static final String TAG = MapsActivityRaw.class.getSimpleName();
    private static final int LOCATION_PERMISSION_REQUEST_CODE = 1;
    private static final String HIGH = "High Alert";
    private static final String MEDIUM = "Medium Alert";
    private static final String MILD = "Mild Alert";
    private static final String LOW = "Low Alert";
    GoogleMap map;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Retrieve the content view that renders the map.
        setContentView(R.layout.activity_maps_raw);


        // Get the SupportMapFragment and register for the callback
        // when the map is ready for use.
        SupportMapFragment mapFragment =
                (SupportMapFragment) getSupportFragmentManager()
                        .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
    }

    /**
     * Manipulates the map when it's available.
     * The API invokes this callback when the map is ready for use.
     */
    @Override
    public void onMapReady(GoogleMap googleMap) {

        try {
            // Customise the styling of the base map using a JSON object defined
            // in a raw resource file.
            boolean success = googleMap.setMapStyle(
                    MapStyleOptions.loadRawResourceStyle(
                            this, R.raw.style_json));

            if (!success) {
                Log.e(TAG, "Style parsing failed.");
            }
        } catch (Resources.NotFoundException e) {
            Log.e(TAG, "Can't find style. Error: ", e);
        }

        /*if (ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION)
                == PackageManager.PERMISSION_GRANTED) {
            if (googleMap != null) {
                googleMap.setMyLocationEnabled(true);
            }
        } else {
            // Permission to access the location is missing. Show rationale and request permission
            PermissionUtils.requestPermission(this, LOCATION_PERMISSION_REQUEST_CODE,
                    Manifest.permission.ACCESS_FINE_LOCATION, true);
        }*/
        // Position the map's camera near Sydney, Australia.
        Toast.makeText(this, "Position is set to Kolkata as Default.", Toast.LENGTH_SHORT).show();
        map = googleMap;
        googleMap.moveCamera(CameraUpdateFactory.newLatLng(new LatLng(22.57, 88.36)));
        googleMap.setMyLocationEnabled(true);
        googleMap.setOnMyLocationButtonClickListener(this);
        googleMap.setOnMyLocationClickListener(this);
        plotThrets(googleMap);
        googleMap.addCircle(new CircleOptions()
                .center(new LatLng(22.57,88.36))
                .radius(5000)
                .strokeWidth(1)
                .strokeColor(Color.BLUE)
                .fillColor(0x220000ff));
    }

    private void plotThrets(GoogleMap googleMap) {
        try {
            ObjectMapper mapper= new ObjectMapper();
            InputStream in = getResources().openRawResource(R.raw.data);
            BufferedReader br = new BufferedReader(new InputStreamReader(in));

            InputStream is = getResources().openRawResource(R.raw.data);
            Writer writer = new StringWriter();
            char[] buffer = new char[1024];
            try {
                Reader reader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
                int n;
                while ((n = reader.read(buffer)) != -1) {
                    writer.write(buffer, 0, n);
                }
            } finally {
                is.close();
            }

            String jsonString = writer.toString();


            Log.d("aa",jsonString);

            JSONArray jsonArray =  new JSONArray(jsonString);


            for(int i = 0; i<jsonArray.length(); i++)
            {
                JSONObject jsonObject = jsonArray.getJSONObject(i);


                double lat = Double.parseDouble(jsonObject.get("Latitute").toString());
                double lang = Double.parseDouble(jsonObject.get("Longitude").toString());
                Log.d("aa",lat+"--"+lang);
                googleMap.addCircle(new CircleOptions()
                        .center(new LatLng(lat,lang))
                        .radius(5000)
                        .strokeWidth(1)
                        .strokeColor(getMyColor(jsonObject.get("Grade").toString()))
                        .fillColor(getMyColor(jsonObject.get("Grade").toString())));

            }

            /*HeatArray heatAr = mapper.readValue(br.readLine(), HeatArray.class);

            for(Heat h: heatAr.getHeatArrray())
            {


            }*/

        } catch (IOException | JSONException e) {
            e.printStackTrace();
        }
    }

    private int getMyColor(String grade) {
        int color = 0;
        switch (grade) {
            case HIGH:
                color = 0x22ff0000; //RED

                break;
            case MILD:
                color = 0x22ff9900;//ORANGE


                break;
            case MEDIUM:
                color = 0x22ffe100;//YELLOW

                break;
            case LOW:
                color = 0x220040ff;//BLUE

                break;
            default:
                color = 0x222bff00;//GREEN

                break;
        }
        return  color;
        
    }


    @Override
    public void onMyLocationClick(@NonNull Location location) {
        Toast.makeText(this, "Current location:\n" + location, Toast.LENGTH_LONG).show();
        map.addMarker(new MarkerOptions().position(new LatLng(location.getLatitude(),location.getLongitude())).title("My Location"));
    }

    @Override
    public boolean onMyLocationButtonClick() {
        Toast.makeText(this, "MyLocation button clicked", Toast.LENGTH_SHORT).show();
        // Return false so that we don't consume the event and the default behavior still occurs
        // (the camera animates to the user's current position).
        return false;
    }
    /*@Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        if (requestCode != LOCATION_PERMISSION_REQUEST_CODE) {
            return;
        }

        if (PermissionUtils.isPermissionGranted(permissions, grantResults, Manifest.permission.ACCESS_FINE_LOCATION)) {
            // Enable the my location layer if the permission has been granted.
            enableMyLocation();
        } else {
            // Permission was denied. Display an error message
            // ...
        }
    }*/
}
