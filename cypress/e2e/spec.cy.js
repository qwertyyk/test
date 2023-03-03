describe("Rozetka",() => {
it('By', () => {
  cy.visit('https://rozetka.com.ua/');
  cy.get('li[class="header-actions__item header-actions__item--user"]').click();
  cy.get('input[type="email"]').type('genaigr1234@gmail.com');
  cy.get('input[type="password"]').type('Gena1111');
  cy.get('label[class="auth-modal__remember-checkbox"]').click();
  cy.get('button[class="button button--large button--green auth-modal__submit ng-star-inserted"]').click()
  cy.get('button[class="modal__close"]').click();
  cy.get('button[class="header__button ng-tns-c119-1"]').click(); 
  cy.get('button[class="city-toggle button button--small button--white"]').click(); 
  cy.get('li[class="header-location__popular-item ng-star-inserted"]').contains("Київ").click();
  cy.get('button[class="button button_size_medium button_color_green"]').click();
  cy.get('li[class="main-categories__item ng-star-inserted"]').contains("Ноутбуки та комп’ютери").click();
  cy.get('li[class="menu-main__item ng-star-inserted"]').contains("Ноутбуки").click();
cy.contains("Ноутбук Acer Aspire 7 A715-42G-R3EZ (NH.QBFEU.00C) Charcoal Black / AMD ").click()
cy.get('li[class="tabs__item ng-star-inserted"]').contains("Характеристики").click();
cy.scrollTo(0, 200);
cy.wait(2000);
cy.scrollTo(0, 1000);
cy.wait(2000);
cy.get('button[class="buy-button button button--with-icon button--green button--medium buy-button--tile ng-star-inserted"]').click();
cy.get('button[class="button button_size_medium button_color_gray cart-footer__continue ng-star-inserted"]').click();
cy.get('input[type="text"]').type('iphone 13')
cy.contains("Знайти").click()
cy.contains("Мобільний телефон Apple iPhone 13 128GB Midnight (MLPF3HU/A").click();
cy.get('li[class="tabs__item ng-star-inserted"]').contains("Характеристики").click();
cy.wait(2000);
cy.get('button[class="buy-button button button--with-icon button--green button--medium buy-button--tile ng-star-inserted"]').contains("Купити").click();


})
})
