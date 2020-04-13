package com.example.styledmap;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;

import androidx.appcompat.app.AppCompatActivity;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

public class SplashActivity extends AppCompatActivity {

    private FirebaseAuth mAuth;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);
        final int splash_display_time_length = 500;
        mAuth = FirebaseAuth.getInstance();
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                FirebaseUser user=mAuth.getCurrentUser();

                if(user != null && user.isEmailVerified()) {
                    Intent intent = new Intent(SplashActivity.this, MainActivity.class);
                    SplashActivity.this.startActivity(intent);
                    SplashActivity.this.finish();
                } else {
                    Intent intent = new Intent(SplashActivity.this, LoginActivity.class);
                    SplashActivity.this.startActivity(intent);
                    SplashActivity.this.finish();
                }

            }
        }, splash_display_time_length);
    }
}
