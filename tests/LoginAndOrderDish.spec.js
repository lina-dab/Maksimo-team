import { test, expect } from '@playwright/test';
import { IndexPage } from './pages/indexPage';
import { LoginPage } from './pages/loginPage';

test.describe('Login and order dish', () => {
    test.beforeEach('login with valid crediantials', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.fillEmail('lina.dabravolskaite@sft.com');
        await loginPage.fillPassword('student333');
        await loginPage.clickLogin();
        await page.waitForTimeout(3000);
        const indexPage = new IndexPage(page);
        expect(await indexPage.userNameVisible()).toEqual('Lina Dabravolskaite');
        await page.waitForTimeout(5000);
    });
    test('Order dish', async ({page}) => {
        const indexPage = new IndexPage(page);
        expect(await indexPage.haveTestB()).toEqual('ARBUZAI');
        await indexPage.clickFriday();
        await indexPage.clickprovidertestgreen();
        await indexPage.clickmaindish();
    })
})
