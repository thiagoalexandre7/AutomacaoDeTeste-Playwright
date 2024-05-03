import { test, expect } from '@playwright/test'

test('Nova Tarefa', async ({ page }) => {
    await page.goto('http://localhost:3000')
    const inputTaskName = page.locator('#newTask')
    await inputTaskName.fill('Ler um livro de TypeScrypt')
    await page.click('css=button >> text=Creat')

})

//     await page.click('xpath=//button[contains(text(), "Create")]')
//     await inputTaskName.press('Enter')