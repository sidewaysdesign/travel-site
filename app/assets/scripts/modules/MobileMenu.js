import $ from 'jquery';

class MobileMenu {
 constructor() {
  this.siteHeader = $(".site-header");
  this.menuIcon = $(".site-header__menu-icon");
  this.menuContent = $(".site-header__menu-content");
  this.events();
 }

 events() {
  this.menuIcon.click(this.toggleTheMenu.bind(this));
 }

 toggleTheMenu() {
  this.menuIcon.toggleClass("site-header__menu-icon--close-x");

  this.siteHeader.toggleClass("site-header--is-expanded");
  this.menuContent.toggleClass("site-header__menu-content--is-visible");
 }
}

export default MobileMenu;
