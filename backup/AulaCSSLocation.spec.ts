import { test, expect } from '@playwright/test'

test('Nova Tarefa', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.fill('#newTask', 'Ler um livro de TypeScrypt')
})

//  Diferentes formas do css location
//  await page.fill('input[placeholder="Add a new Task"]', 'Ler um livro de TypeScrypt')
//  await page.fill('._listInputNewTask_1y0mp_21', 'Ler um livro de TypeScrypt')
//  await page.fill('input[class*=InputNewTask]', 'Ler um livro de TypeScrypt')