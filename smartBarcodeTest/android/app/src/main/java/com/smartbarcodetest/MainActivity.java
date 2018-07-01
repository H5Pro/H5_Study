package com.smartbarcodetest;

import com.facebook.react.ReactActivity;
import com.reactnativecomponent.barcode.RCTCapturePackage;    //import RCTCapturePackage
import android.os.Bundle;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "smartBarcodeTest";
    }
    protected void onCreate(Bundle savedInstanceState) {
        MainApplication application = (MainApplication) this.getApplication();
        application.setReactNativeHost(new ReactNativeHost(application) {
            @Override
            public boolean getUseDeveloperSupport() {
                return BuildConfig.DEBUG;
            }

            @Override
            protected List<ReactPackage> getPackages() {
                return Arrays.<ReactPackage>asList(
                        new MainReactPackage(),
                        new RCTCapturePackage()    //register Module
                );
            }

        });

        super.onCreate(savedInstanceState);
    }
}

