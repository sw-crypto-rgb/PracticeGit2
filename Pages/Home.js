export class Home {
    constructor(page) {
        this.page = page;
}

async launchApp() {
    await this.page.goto('https://tutorialsninja.com/demo/');
}

async changeCurrencyToEuro() {
    const locator = this.page.getByRole('button', { name: '$ Currency  ' })
    await locator.hover();
    await locator.click();
    const currencyDropdown = this.page.locator("button.btn-link.dropdown-toggle");
    const  euroOption = this.page.locator("button[name='EUR']");
    await euroOption.click();
}
}