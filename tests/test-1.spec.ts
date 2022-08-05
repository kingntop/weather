import { test, expect, request} from '@playwright/test';



test('should create a bug report', async ({ request }) => {
    const issues = await request.get('https://jsonplaceholder.typicode.com/todos/1');
    expect(issues.ok()).toBeTruthy();
    const posts = await issues.json()

    console.log(posts)

});
