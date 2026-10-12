(() => {
  const button = document.getElementById('bg-toggle');
  if (!button) return;

  const COLORS = [
    { name: 'Cream', value: '#FFF8F0' },
    { name: 'Latte', value: '#F3E6D3' },
    { name: 'Mint', value: '#E6F2EA' },
    { name: 'Sky', value: '#E4EEF7' },
    { name: 'Rose', value: '#F8E6E8' },
    { name: 'Lavender', value: '#EDE7F6' }
  ];

  const label = button.querySelector('.bg-name');
  let currentIndex = 0;

  button.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % COLORS.length;
    const color = COLORS[currentIndex];

    document.body.style.backgroundColor = color.value;
    label.textContent = color.name;
  });
})();
