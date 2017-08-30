package comsanyabeast.github.dryver;

import android.content.Context;
import android.os.Build;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;

/**
 * Created by Rocky on 30.08.2017.
 */

public class WVController {
    WebView webView;
    Context context;

    WVController(Context c, WebView _webView){
        context = c;
        webView = _webView;
        this.setup();
    }

    public void openPage(String path){
        webView.loadUrl(path);
    }

    private void setup(){
        webView.setWebViewClient(new CustomWebViewClient());
        webView.setWebChromeClient(new WebChromeClient());
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setDomStorageEnabled(true);
        webView.addJavascriptInterface(new JavaScriptAPI(context), "Android");
        webView.getSettings().setRenderPriority(WebSettings.RenderPriority.HIGH);
        webView.getSettings().setAppCacheEnabled(false);
        webView.getSettings().setCacheMode(WebSettings.LOAD_NO_CACHE);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            webView.setLayerType(View.LAYER_TYPE_HARDWARE, null);
        } else {
            webView.setLayerType(View.LAYER_TYPE_SOFTWARE, null);
        }
    }
}
