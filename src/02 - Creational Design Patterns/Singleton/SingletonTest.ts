import StatsTracker from './Statstracker';

export default function test() {
  const tracker = StatsTracker.instance;
  console.log(`widget Views ${tracker.widgetViews}`);
  console.log(`Buttons Clicks ${tracker.buttonClicks }`);
};