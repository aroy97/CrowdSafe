package com.example.styledmap;

import androidx.annotation.Keep;

@Keep
public class HeatArray {
    public Heat[] getHeatArrray() {
        return heatArrray;
    }

    public void setHeatArrray(Heat[] heatArrray) {
        this.heatArrray = heatArrray;
    }

    private Heat[] heatArrray;
}
