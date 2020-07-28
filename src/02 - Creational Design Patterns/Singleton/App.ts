import StatsTracker from './Statstracker';
import test from './SingletonTest';

const tracker = StatsTracker.instance;

tracker.widgetViews = 90;
tracker.buttonClicks = 64;
tracker.facebookShares = 20;
tracker.twitterShares = 30;


console.log(`widget Views ${tracker.widgetViews}`);
console.log(`Buttons Clicks ${tracker.buttonClicks }`);
console.log(`Facebook Shares ${tracker.facebookShares}`);
console.log(`Twitter Shares ${tracker.twitterShares}`);

tracker.widgetViews++;
tracker.twitterShares += 2;


test();