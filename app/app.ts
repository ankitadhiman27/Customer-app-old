import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {OrderPage} from './pages/order/order';
import {StockHistoryPage} from './pages/stock-history/stock-history';
import {PrefrencesPage} from './pages/prefrences/prefrences';
import {AccountsPage} from './pages/accounts/accounts';
import {AnalyticsPage} from './pages/analytics/analytics';
import {NotificationsPage} from './pages/notifications/notifications';
import {CompanyDetailPage} from './company/company-detail/company-detail';
@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any, icon: string}>;
  company: Array<{title: string, component: any, icon: string}>;
  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { icon: 'fa fa-list' ,title: 'Order', component: OrderPage},
      { icon: 'fa fa-history' ,title: 'Stock-history', component: StockHistoryPage,},
      { icon: 'fa fa-cogs' , title: 'Prefrences', component: PrefrencesPage},
      { icon: 'fa fa-user' ,title: 'Accounts', component: AccountsPage },
      { icon: 'fa fa-line-chart', title: 'Analytics', component: AnalyticsPage,  },
      { icon: 'fa fa-bell-o' , title: 'Notifications', component: NotificationsPage}
    ];
     this.company = [
      { icon: 'fa fa-list' ,title: 'Order', component: CompanyDetailPage}
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
