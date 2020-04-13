package com.example.styledmap;

import android.app.Dialog;
import android.app.ProgressDialog;
import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AlertDialog;
import androidx.fragment.app.DialogFragment;

import com.google.android.material.textfield.TextInputEditText;
/*import com.google.gson.JsonElement;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;*/

public class DialogLogin extends DialogFragment {
    private final ProgressDialog progressDialog;
    private DialogLoginListener listener;
    Context context;
    String api_key;
    long phoneNumber;
    DialogLogin(ProgressDialog progressDialog, Context context, String api_key, long phoneNumber) {
        super();
        this.phoneNumber = phoneNumber;
        this.progressDialog = progressDialog;
        this.context = context;
        this.api_key = api_key;
    }


    @Override
    public void onAttach(@NonNull Context context) {
        super.onAttach(context);

        try {
            listener = (DialogLoginListener) getActivity();
        } catch (ClassCastException e) {
            e.printStackTrace();
        }
    }

    @NonNull
    @Override
    public Dialog onCreateDialog(@Nullable Bundle savedInstanceState) {
        final TextInputEditText usertext, userpass;

        final Context context = getActivity();
        AlertDialog.Builder alertDialog = new AlertDialog.Builder(context);
        LayoutInflater inflater = getActivity().getLayoutInflater();
        final View view = inflater.inflate(R.layout.dialoglogin, null);

        usertext = view.findViewById(R.id.login_username);

        AlertDialog.Builder dialog = new AlertDialog.Builder(context);
        dialog.setView(usertext);
        view.findViewById(R.id.verify_button).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                listener.onOTP(usertext.getText().toString(),phoneNumber);
            }
        });

        view.findViewById(R.id.resend_button).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //resendOTPCall();
            }
        });


        alertDialog.setView(view).setTitle("OTP Verification");


        return alertDialog.create();
    }

    /*private void resendOTPCall() {

        String baseUrl = getString(R.string.baseUrl);
        Retrofit retrofit =  new Retrofit.Builder().baseUrl(baseUrl).addConverterFactory(GsonConverterFactory.create()).build();
        JsonPlaceHolderApi json = retrofit.create(JsonPlaceHolderApi.class);
        json.resendOTP(api_key,phoneNumber).enqueue(new Callback<JsonElement>() {
            @Override
            public void onResponse(Call<JsonElement> call, Response<JsonElement> response) {

                if (response.body() != null) {
                    if(response.isSuccessful() && requestSuccessful(response.body()))
                        Toast.makeText(context, "OTP sent via Call. You will recieve a call any minute now! ", Toast.LENGTH_SHORT).show();
                    else
                        Toast.makeText(context, "OTP cannot be sent via Call", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<JsonElement> call, Throwable t) {
                Toast.makeText(context, "Failed to send OTP: Network Issue!!!", Toast.LENGTH_SHORT).show();
            }
        });
    }*/

    /*private boolean requestSuccessful(JsonElement json) {
        String s = json.getAsJsonObject().get("type").getAsString();
        return s.equals("success");
    }*/

    public interface DialogLoginListener {
        public void onOTP(String userotp, long phoneNumber);
    }


}
