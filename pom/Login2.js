import { test, expect } from '@playwright/test';
export class Login {

    constructor(page) {
        this.page = page;
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[data-test="login-button"]');
    }

   async launchApp() { 
    await this.page.goto('https://www.saucedemo.com/');
    }

    async loginStandard() {
        await this.username.fill('standard_user');
        await this.password.fill('secret_sauce');
        await this.loginBtn.click();
    }   

    async loginError() {
        await this.username.fill('locked_out_user');
        await this.password.fill('secret_sauce');
        await this.loginBtn.click();
    }
    async loginProblem() {
        await this.username.fill('problem_user');
        await this.password.fill('secret_sauce');
        await this.loginBtn.click();
    }
    async loginPerformance() {
        await this.username.fill('performance_glitch_user');
        await this.password.fill('secret_sauce');
        await this.loginBtn.click();
    }
    async loginEmpty() {
        await this.username.fill('');
        await this.password.fill('');
        await this.loginBtn.click();
    }   
    async loginInvalid() {
        await this.username.fill('invalid_user');
        await this.password.fill('invalid_password');
        await this.loginBtn.click();
    }   
    async loginEmptyUsername() {
        await this.username.fill('');
        await this.password .fill('secret_sauce');
        await this.loginBtn.click();
    }   
}

