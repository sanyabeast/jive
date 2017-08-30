package comsanyabeast.github.dryver;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.support.v4.app.NotificationCompat;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

/**
 * Created by Rocky on 27.08.2017.
 */

public class JavaScriptAPI {
    Context mContext;
    Intent intent;
    PendingIntent contentIntent;

    /** Instantiate the interface and set the context */
    JavaScriptAPI(Context c) {
        mContext = c;
        intent = new Intent(mContext, MainActivity.class);
        contentIntent = PendingIntent.getActivity(mContext, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT);

    }

    @JavascriptInterface
    public void makeNotification(String title, String content, String ticker, String contentInfo){

        NotificationCompat.Builder b = new NotificationCompat.Builder(mContext);

        b.setAutoCancel(true)
                .setDefaults(Notification.DEFAULT_ALL)
                .setWhen(System.currentTimeMillis())
                .setSmallIcon(R.mipmap.ic_launcher_round)
                .setTicker(ticker)
                .setContentTitle(title)
                .setContentText(content)
                .setContentInfo(contentInfo);


        NotificationManager notificationManager = (NotificationManager) mContext.getSystemService(Context.NOTIFICATION_SERVICE);
        notificationManager.notify(1, b.build());
    }

    /** Show a toast from the web page */
    @JavascriptInterface
    public void showToast(String toast) {
        Toast.makeText(mContext, toast, Toast.LENGTH_SHORT).show();
    }

    @JavascriptInterface
    public void log(String text){
        System.out.println(text);
    }

}
