package comsanyabeast.github.dryver;

import android.webkit.WebView;
import android.webkit.WebViewClient;

/**
 * Created by Rocky on 27.08.2017.
 */

public class CustomWebViewClient extends WebViewClient {
    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
        view.loadUrl (url);
        return true;
    }
}
