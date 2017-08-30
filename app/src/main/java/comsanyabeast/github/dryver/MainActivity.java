package comsanyabeast.github.dryver;

import android.app.ActionBar;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;

public class MainActivity extends AppCompatActivity {

    private WVController wvController;
    private WebView webView;





    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        webView = (WebView) findViewById(R.id.webview);

        wvController = new WVController(this, webView);

        //this.setupWebView();
        wvController.openPage("file:///android_asset/js/app/index.html");
    }

}
