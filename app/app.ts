import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {OrderPage} from './pages/order/order';
import {StockHistoryPage} from './pages/stock-history/stock-history';
import {PrefrencesPage} from './pages/prefrences/prefrences';
import {AccountsPage} from './pages/accounts/accounts';
import {AnalyticsPage} from './pages/analytics/analytics';
import {NotificationsPage} from './pages/notifications/notifications';
@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Order', component: OrderPage },
      { title: 'stock-history', component: StockHistoryPage },
      { title: 'prefrences', component: PrefrencesPage },
      { title: 'Accounts', component: AccountsPage },
      { title: 'Analytics', component: AnalyticsPage },
      { title: 'notifications', component: NotificationsPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
