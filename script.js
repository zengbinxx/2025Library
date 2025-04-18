document.addEventListener('DOMContentLoaded', function() {
    // 加载书籍数据
    const books = [
        {
            id: 1,
            title: '论语',
            content: '子曰："学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？"'
        },
        {
            id: 2,
            title: '道德经',
            content: '道可道，非常道。名可名，非常名。无名天地之始，有名万物之母。'
        }
        // 可以添加更多书籍
    ];

    // 在线阅读界面
    const readingInterface = document.querySelector('.reading-interface');
    
    if (readingInterface) {
        // 创建书籍选择器
        const bookSelector = document.createElement('select');
        bookSelector.id = 'book-selector';
        
        books.forEach(book => {
            const option = document.createElement('option');
            option.value = book.id;
            option.textContent = book.title;
            bookSelector.appendChild(option);
        });

        // 创建内容显示区域
        const contentDisplay = document.createElement('div');
        contentDisplay.id = 'content-display';
        contentDisplay.className = 'book-content';

        readingInterface.appendChild(bookSelector);
        readingInterface.appendChild(contentDisplay);

        // 监听书籍选择
        bookSelector.addEventListener('change', (e) => {
            const selectedBook = books.find(book => book.id === parseInt(e.target.value));
            if (selectedBook) {
                contentDisplay.innerHTML = `
                    <h3>${selectedBook.title}</h3>
                    <div class="book-text">${selectedBook.content}</div>
                `;
            }
        });

        // 初始加载第一本书
        bookSelector.dispatchEvent(new Event('change'));
    }
}); 