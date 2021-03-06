// >> listview-multiple-operations-code
import { ViewModel } from "./multiple-model";
import { Page } from "tns-core-modules/ui/page";
import { RadListView } from "nativescript-ui-listview";

let page: Page;
let bindingContext: ViewModel;

export function onPageLoaded(args) {
    page = args.object;
    bindingContext = new ViewModel();
    page.bindingContext = bindingContext;
}

export function toggleFilter() {
    const listView = page.getViewById("myListView") as RadListView;
    if (!listView.filteringFunction) {
        listView.filteringFunction = bindingContext.myFilteringFunc;
        bindingContext.isFilteringEnabled = true;
    } else {
        listView.filteringFunction = undefined;
        bindingContext.isFilteringEnabled = false;
    }
}

export function toggleSorting() {
    const listView = page.getViewById("myListView") as RadListView;
    if (!listView.sortingFunction) {
        listView.sortingFunction = bindingContext.mySortingFunc;
        bindingContext.isSortingEnabled = true;
    } else {
        listView.sortingFunction = undefined;
        bindingContext.isSortingEnabled = false;
    }
}

export function toggleGrouping() {
    const listView = page.getViewById("myListView") as RadListView;
    if (!listView.groupingFunction) {
        listView.groupingFunction = bindingContext.myGroupingFunc;
        bindingContext.isGroupingEnabled = true;
    } else {
        listView.groupingFunction = undefined;
        bindingContext.isGroupingEnabled = false;
    }
}
// << listview-multiple-operations-code

export function onItemSelected(args) {
    const selectedItems = args.object.getSelectedItems();
    console.log(selectedItems[0].id);
    // Wrong items returned here: selectedItems
}
