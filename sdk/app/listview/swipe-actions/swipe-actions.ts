
import viewModel = require("./swipe-actions-model");
import listViewModule = require("nativescript-telerik-ui-pro/listview");
import viewModule = require('ui/core/view');
import frameModule = require("ui/frame");
import utilsModule = require("utils/utils");

export function onPageLoaded(args) {
    var page = args.object;

    page.bindingContext = new viewModel.ViewModel();
}

// >> listview-swipe-action-release-notify
export function onCellSwiping(args: listViewModule.ListViewEventData) {
    var swipeLimits = args.data.swipeLimits;
    var currentItemView = args.object;
    var currentView;

    if (args.data.x > 200) {
        console.log("Notify perform left action");
    } else if (args.data.x < -200) {
        console.log("Notify perform right action");
    }
}
// << listview-swipe-action-release-notify

// >> listview-swipe-action-release-limits
export function onSwipeCellStarted(args: listViewModule.ListViewEventData) {
    var swipeLimits = args.data.swipeLimits;
    var swipeView = args['swipeView'];
    var leftItem = swipeView.getViewById('mark-view');
    var rightItem = swipeView.getViewById('delete-view');
    swipeLimits.threshold = args.data.x > 0 ? leftItem.getMeasuredWidth() : rightItem.getMeasuredWidth();
}
// << listview-swipe-action-release-limits

// >> listview-swipe-action-release-execute
export function onSwipeCellFinished(args: listViewModule.ListViewEventData) {
    if (args.data.x > 200) {
        console.log("Perform left action");
    } else if (args.data.x < -200) {
        console.log("Perform right action");
    }
}
// << listview-swipe-action-release-execute

export function onLeftSwipeClick(args: listViewModule.ListViewEventData) {
    var listView = <listViewModule.RadListView>frameModule.topmost().currentPage.getViewById("listView");
    console.log("Left swipe click");
    listView.notifySwipeToExecuteFinished();
}

export function onRightSwipeClick(args) {
    var listView = <listViewModule.RadListView>frameModule.topmost().currentPage.getViewById("listView");
    console.log("Right swipe click");
    //listView.notifySwipeToExecuteFinished();
    var viewModel: viewModel.ViewModel = <viewModel.ViewModel>listView.bindingContext;
    viewModel.dataItems.splice(viewModel.dataItems.indexOf(args.object.bindingContext), 1);
}