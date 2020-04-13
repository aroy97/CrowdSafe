package com.example.styledmap;

import androidx.annotation.Keep;

import java.util.zip.DeflaterOutputStream;

@Keep
public class Heat {
    private String Image;
    private double Latitute;
    private double Longitude;
    private double Count;
    private String Grade;

    public String getImage() {
        return Image;
    }

    public void setImage(String image) {
        Image = image;
    }

    public double getLatitute() {
        return Latitute;
    }

    public void setLatitute(double latitute) {
        Latitute = latitute;
    }

    public double getLongitude() {
        return Longitude;
    }

    public void setLongitude(double longitude) {
        Longitude = longitude;
    }

    public double getCount() {
        return Count;
    }

    public void setCount(double count) {
        Count = count;
    }

    public String getGrade() {
        return Grade;
    }

    public void setGrade(String grade) {
        Grade = grade;
    }
}
