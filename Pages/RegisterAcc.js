import { test, expect } from '@playwright/test';


export class RegisterAcc {
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
    async registerAccount() {

        await this.page.goto('https://tutorialsninja.com/demo/');
        await this.page.getByRole('button', { name: '$ Currency  ' }).click();
        await this.page.getByRole('button', { name: '€Euro' }).click();

        
        await this.page.getByRole('link', { name: 'Canon EOS 5D' }).first().click();
        await this.page.getByRole('button', { name: 'Add to Cart' }).click();
        await this.page.getByText('Select required!').click();

        //await this.page.getByRole('listitem').filter({ hasText: /^$/ })

        await this.page.getByRole('link', { name: 'Qafox.com' }).click();

        await this.page.getByRole('link', { name: 'iPhone' }).nth(2).click();
        await this.page.getByRole('textbox', { name: 'Qty' }).click();
        await this.page.getByRole('textbox', { name: 'Qty' }).fill('2');
        await this.page.getByRole('button', { name: 'Add to Cart', exact: true }).click();
        await this.page.getByRole('button', { name: ' 2 item(s) - 193.33€' }).click();
        await this.page.getByRole('link', { name: ' View Cart' }).click();
        await this.page.locator('input[name="quantity[334656]"]').click();
        await this.page.locator('input[name="quantity[334656]"]').fill('3');
        await this.page.getByRole('button').nth(4).click();
        await this.page.getByText('Products marked with *** are').click();
        

        await this.page.getByRole('link', { name: 'iPhone' }).nth(2).click();
        await this.page.getByRole('textbox', { name: 'Qty' }).click();
        await this.page.getByRole('textbox', { name: 'Qty' }).fill('2');
        await this.page.getByRole('button', { name: 'Add to Cart', exact: true }).click();
        await this.page.getByRole('button', { name: ' 2 item(s) - 193.33€' }).click();
        await this.page.getByRole('link', { name: ' View Cart' }).click();
        await page.locator('input[name="quantity[334654]"]').click();
        await page.locator('input[name="quantity[334654]"]').fill('3');
        await page.getByRole('button').nth(4).click();



        //await this.page.locator('input[name="quantity[334652]"]').click();
       // await this.page.locator('input[name="quantity[334652]"]').fill('3');
        //await this.page.getByRole('button').nth(4).click();
        await this.page.getByText('Eco Tax (-2.00):').click();
        await this.page.getByRole('cell', { name: '4.71€' }).click();
        await this.page.getByText('VAT (20%):').click();
        await this.page.getByRole('cell', { name: '47.55€' }).click();
        await this.page.getByRole('link', { name: 'Checkout', exact: true }).click();
        await this.page.getByText('Products marked with *** are').click();

        await this.page.getByRole('button').nth(5).click();
        //await page.getByRole('link', { name: 'Qafox.com' }).click();
        //await this.page.getByRole('listitem').filter({ hasText: /^$/ }).first().click();
//
        await this.page.getByRole('link', { name: 'Laptops & Notebooks', exact: true }).click();
        await this.page.getByRole('link', { name: 'Show AllLaptops & Notebooks' }).click();
        await this.page.getByRole('link', { name: 'HP LP3065' }).first().click();
        await this.page.getByRole('textbox', { name: 'Qty' }).click();
        await this.page.getByRole('button', { name: 'Add to Cart' }).click();
        await this.page.getByText('Success: You have added HP').click();
//
        await this.page.getByRole('link', { name: ' Shopping Cart' }).click();
        await this.page.getByRole('link', { name: 'Use Coupon Code ' }).click();
        await this.page.getByRole('textbox', { name: 'Enter your coupon here' }).click();
        await this.page.getByRole('textbox', { name: 'Enter your coupon here' }).fill('ABCD123');
        await this.page.getByRole('button', { name: 'Apply Coupon' }).click();
        await this.page.getByRole('link', { name: 'Use Gift Certificate ' }).click();
        await this.page.getByRole('textbox', { name: 'Enter your gift certificate' }).click();
        await this.page.getByRole('textbox', { name: 'Enter your gift certificate' }).fill('AXDFGH123');
        await this.page.getByRole('button', { name: 'Apply Gift Certificate' }).click();
        await this.page.getByText('Warning: Gift Certificate is').click();
        await this.page.getByRole('textbox', { name: 'Enter your gift certificate' }).click();
        await this.page.getByRole('textbox', { name: 'Enter your gift certificate' }).fill('');
        await this.page.getByRole('heading', { name: 'Use Coupon Code ' }).click();
        await this.page.getByRole('heading', { name: 'Use Coupon Code ' }).click();
        await this.page.getByRole('link', { name: 'Use Coupon Code ' }).click();
        await this.page.getByRole('textbox', { name: 'Enter your coupon here' }).click();
        await this.page.getByRole('textbox', { name: 'Enter your coupon here' }).fill(''); 
        await this.page.getByRole('link', { name: 'Checkout', exact: true }).click();
//
        await this.page.getByText('Shopping Cart Checkout', { exact: true }).click();
        await this.page.getByRole('heading', { name: 'Step 1: Checkout Options ' }).click();
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.getByRole('heading', { name: 'Step 2: Account & Billing' }).click();
        await this.page.locator('#collapse-payment-address > .panel-body').click();
        await this.page.getByText('Your Personal Details').click();
        await this.page.locator('#collapse-payment-address > .panel-body').click();
        await this.page.getByText('Your Personal Details').click();
        await this.page.locator('#collapse-payment-address > .panel-body').click();
        await this.page.getByText('Your Personal Details').click();
        await this.page.getByRole('textbox', { name: '* First Name' }).click();
        await this.page.getByRole('textbox', { name: '* First Name' }).fill('ABC');
        await this.page.getByRole('textbox', { name: '* Last Name' }).click();
        await this.page.getByRole('textbox', { name: '* Last Name' }).fill('DEF');
        await this.page.getByRole('textbox', { name: '* E-Mail' }).click();
//
        await this.page.getByRole('textbox', { name: '* E-Mail' }).click();
        await this.page.getByRole('textbox', { name: '* E-Mail' }).fill('wunnava.sashi111@gmail.com');
        await this.page.getByRole('textbox', { name: '* Telephone' }).click();
        await this.page.getByRole('textbox', { name: '* Telephone' }).fill('111111111');
        await this.page.getByRole('textbox', { name: '* Password', exact: true }).click();
        await this.page.getByRole('textbox', { name: '* Password', exact: true }).fill('Password123');
        await this.page.getByRole('textbox', { name: '* Password Confirm' }).click();
        await this.page.getByRole('textbox', { name: '* Password Confirm' }).fill('Password123');
        await this.page.getByRole('textbox', { name: '* Address' }).click();
        await this.page.getByRole('textbox', { name: '* Address' }).fill('Address1');
        await this.page.getByRole('textbox', { name: '* City' }).click();
        await this.page.getByRole('textbox', { name: '* City' }).fill('City1');
        await this.page.getByRole('textbox', { name: '* Post Code' }).click();
        await this.page.getByRole('textbox', { name: '* Post Code' }).fill('11111');
        await this.page.getByLabel('Country').selectOption('223');
        await this.page.getByLabel('Region / State').selectOption('3673');
        await this.page.locator('input[name="agree"]').check();
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.getByRole('heading', { name: 'Step 3: Delivery Details ' }).click();
        await this.page.getByRole('button', { name: 'Continue' }).click();
        await this.page.locator('textarea[name="comment"]').click();
        await this.page.locator('textarea[name="comment"]').fill('added comments');
        await this.page.getByRole('checkbox').check();
        await this.page.getByRole('button', { name: 'Continue' }).click();
//
        await this.page.getByRole('button', { name: 'Confirm Order' }).click();
        await this.page.getByText('Shopping Cart Checkout Success').click();
        await this.page.getByText('Your order has been placed!Your order has been successfully processed!You can').click();
        await this.page.getByRole('link', { name: 'Continue' }).click();
//
        await this.page.getByRole('link', { name: 'Contact Us' }).click();
        await this.page.getByRole('textbox', { name: '* Enquiry' }).click();
        await this.page.getByRole('textbox', { name: '* Enquiry' }).fill('Added comments');
        await this.page.getByRole('button', { name: 'Submit' }).click();
        await this.page.getByRole('link', { name: 'Continue' }).click();
    }
}
       
       
       
        /*await this.pagegoto('https://tutorialsninja.com/demo/');

        await this.this.pagegetByRole('link', { name: 'Laptops & Notebooks', exact: true }).click();
        await this.this.pagegetByRole('link', { name: 'Show AllLaptops & Notebooks' }).click();

        await this.this.pagegetByText('Canon EOS 5D').click();
        await this.this.pagegetByRole('button', { name: 'Add to Cart' }).click();
        await this.this.pagegetByText('Select required!').click();
        await this.this.pagegetByRole('link', { name: ' Checkout' }).click();
        //
        await this.this.pagegetByRole('link', { name: 'Qafox.com' }).click();
        await this.this.pagelocator('div').filter({ hasText: 'iPhone iPhone is a' }).nth(5).click();
        await this.this.pagegetByRole('heading', { name: 'iPhone' }).click();
        await this.this.pagegetByRole('link', { name: 'iPhone' }).nth(2).click();
        await this.this.pagegetByRole('textbox', { name: 'Qty' }).click();
        await this.this.pagegetByRole('textbox', { name: 'Qty' }).fill('2');
        await this.this.pagegetByRole('button', { name: 'Add to Cart', exact: true }).click();
        await this.this.pagegetByRole('button', { name: 'Add to Cart', exact: true }).click();
        await this.this.pagegetByText('Success: You have added').click();
        await this.this.pageexpect(this.pagegetByRole('button', { name: ' 4 item(s) - 386.65€' })).toBeVisible();
        await this.this.pagegetByRole('button', { name: ' 4 item(s) - 386.65€' }).click();
        await this.this.pagegetByText('iPhone x4 386.65€ Sub-Total').click();
        await this.this.pagegetByRole('button', { name: ' 4 item(s) - 386.65€' }).click();
        await this.this.pagegetByRole('link', { name: ' View Cart' }).click();
        await this.this.pagelocator('input[name="quantity[334153]"]').click();
        await this.this.pagelocator('input[name="quantity[334153]"]').fill('3');
        await this.this.pagegetByRole('button').nth(4).click();
        await this.this.pagegetByText('Eco Tax (-2.00):').click();
        await this.this.pagegetByRole('cell', { name: '4.71€' }).click();
        await this.this.pagegetByText('VAT (20%):').click();
        await this.this.pagegetByRole('cell', { name: '47.55€' }).click();
        await this.this.pagegetByRole('link', { name: 'Checkout', exact: true }).click();
        await this.this.pagegetByText('Products marked with *** are').click();
        await this.this.pagegetByRole('button').nth(5).click();
        await this.this.pagegetByRole('link', { name: 'Laptops & Notebooks', exact: true }).click();
        await this.this.pagegetByRole('link', { name: 'Show AllLaptops & Notebooks' }).click();
        await this.this.pagelocator('div').filter({ hasText: 'HP LP3065 Stop your co-' }).nth(5).click();
        await this.this.pagegetByText('HP LP3065', { exact: true }).click();
        await this.this.pageexpect(this.pagegetByRole('textbox', { name: 'Qty' })).toBeVisible();
        await this.this.pagegetByRole('textbox', { name: 'Qty' }).click();
        await this.this.pagegetByRole('button', { name: 'Add to Cart' }).click();
        await this.this.pagegetByText('Success: You have added HP').click();
        await this.this.pagelocator('#top-links').click();
        await this.this.pagegetByRole('link', { name: ' Shopping Cart' }).click();
        await this.this.pagelocator('body').click();
        await this.this.pagegetByRole('link', { name: 'Use Coupon Code ' }).click();
        await this.this.pagegetByRole('textbox', { name: 'Enter your coupon here' }).click();
        await this.this.pagegetByRole('textbox', { name: 'Enter your coupon here' }).fill('ABCD123');
        await this.this.pagegetByRole('button', { name: 'Apply Coupon' }).click();
        await this.this.pagegetByText('Warning: Coupon is either').click();
        await this.this.pagegetByRole('heading', { name: 'Use Gift Certificate ' }).click();
        await this.this.pagegetByRole('link', { name: 'Use Gift Certificate ' }).click();
        await this.this.pagegetByRole('textbox', { name: 'Enter your gift certificate' }).click();
        await this.this.pagegetByRole('textbox', { name: 'Enter your gift certificate' }).fill('AXDFGH123');
        await this.this.pagegetByRole('button', { name: 'Apply Gift Certificate' }).click();
        await this.this.pagegetByText('Warning: Gift Certificate is').click();
        await this.this.pagegetByRole('textbox', { name: 'Enter your gift certificate' }).click();
        await this.this.pagegetByRole('textbox', { name: 'Enter your gift certificate' }).click();
        await this.this.pagegetByRole('textbox', { name: 'Enter your gift certificate' }).fill('');
        await this.this.pagegetByRole('link', { name: 'Use Coupon Code ' }).click();
        await this.this.pagegetByRole('textbox', { name: 'Enter your coupon here' }).click();
        await this.this.pagegetByRole('textbox', { name: 'Enter your coupon here' }).fill('');
        await this.this.pagegetByRole('link', { name: 'Checkout', exact: true }).click();
        await this.this.pagelocator('body').click();
        await this.this.pagegetByText('Shopping Cart Checkout Checkout Step 1: Checkout Options New Customer Checkout').click();
        await this.this.pagegetByRole('heading', { name: 'Checkout', exact: true }).click();
        await this.this.pagegetByRole('heading', { name: 'Step 1: Checkout Options ' }).click();
        await this.this.pagegetByText('New Customer Checkout Options').click();
        await this.this.pagegetByRole('button', { name: 'Continue' }).click();
        await this.this.pagegetByRole('heading', { name: 'Step 2: Account & Billing' }).click();
        await this.this.pagelocator('#collapse-payment-address > .panel-body').click();
        await this.this.pagegetByText('Your Personal Details').click();
        await this.this.pagegetByRole('textbox', { name: '* First Name' }).click();
        await this.this.pagegetByRole('textbox', { name: '* First Name' }).fill('Sashi');
        await this.this.pagegetByRole('textbox', { name: '* Last Name' }).click();
        await this.this.pagegetByRole('textbox', { name: '* Last Name' }).fill('W');
        await this.this.pagegetByRole('textbox', { name: '* E-Mail' }).click();
        await this.this.pagegetByRole('textbox', { name: '* E-Mail' }).fill('wunnava@sashi@gmail.com');
        await this.this.pagegetByRole('textbox', { name: '* Telephone' }).click();
        await this.this.pagegetByRole('textbox', { name: '* Telephone' }).fill('1111111111');
        await this.this.pagegetByRole('textbox', { name: '* Password', exact: true }).dblclick();
        await this.this.pagegetByRole('textbox', { name: '* Password', exact: true }).fill('P@ssword123');
        await this.this.pagegetByRole('textbox', { name: '* Password Confirm' }).click();
        await this.this.pagegetByRole('textbox', { name: '* Password Confirm' }).fill('P@ssword123');
        await this.this.pagegetByText('Your Address').click();
        await this.this.pagegetByRole('textbox', { name: '* Address' }).click();
        await this.this.pagegetByRole('textbox', { name: '* Address' }).fill('Address1');
        await this.this.pagegetByRole('textbox', { name: '* City' }).click();
        await this.this.pagegetByRole('textbox', { name: '* City' }).fill('City1');
        await this.this.pagegetByRole('textbox', { name: '* Post Code' }).click();
        await this.this.pagegetByRole('textbox', { name: '* Post Code' }).fill('11111');
        await this.this.pagegetByLabel('Country').selectOption('223');
        await this.this.pagegetByLabel('Region / State').selectOption('3673');
        await this.this.pagelocator('input[name="agree"]').check();
        await this.this.pagegetByRole('button', { name: 'Continue' }).click();
        await this.this.pagegetByRole('heading', { name: 'Step 3: Delivery Details' }).click();
        await this.this.pagegetByRole('heading', { name: 'Step 3: Delivery Details' }).click();
        await this.this.pagegetByRole('heading', { name: 'Step 4: Delivery Method ' }).click();
        await this.this.pagelocator('textarea[name="comment"]').click();
        await this.this.pagelocator('textarea[name="comment"]').fill('comments added');
        await this.this.pagegetByRole('button', { name: 'Continue' }).click();
        await this.this.pagelocator('div').filter({ hasText: 'Step 5: Payment Method' }).nth(5).click();
        await this.this.pagegetByRole('checkbox').check();
        await this.this.pagegetByRole('button', { name: 'Continue' }).click();
        await this.this.pagegetByRole('heading', { name: 'Step 6: Confirm Order ' }).click();
        await this.this.pagelocator('#collapse-checkout-confirm > .panel-body').click();
        await this.this.pagegetByRole('button', { name: 'Confirm Order' }).click();
        await this.this.pagegetByText('Your order has been placed!Your order has been successfully processed!You can').click();
        await this.this.pagegetByText('Shopping Cart Checkout Success').click();
        await this.this.pagegetByRole('link', { name: 'Continue' }).click();
        await this.this.pagegetByRole('link', { name: 'Contact Us' }).click();
        await this.this.pagegetByRole('textbox', { name: '* Enquiry' }).click();
        await this.this.pagegetByRole('textbox', { name: '* Enquiry' }).fill('when is the shipping date for my product');
        await this.this.pagegetByRole('button', { name: 'Submit' }).click();
        await this.this.pagegetByRole('link', { name: 'Continue' }).click();
       }*/