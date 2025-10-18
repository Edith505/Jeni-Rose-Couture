feather.replace();
        
        // Revenue Chart
        const ctx = document.getElementById('revenueChart').getContext('2d');
        const revenueChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
                datasets: [{
                    label: 'Revenus (€)',
                    data: [3200, 2800, 3500, 4200, 3800, 4500, 5200, 4800, 5500, 6000, 5800, 6200],
                    borderColor: '#8b5e7a',
                    backgroundColor: 'rgba(139, 94, 122, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
        
        // Mobile menu toggle
        function toggleSidebar() {
            const sidebar = document.querySelector('.sidebar-transition');
            sidebar.classList.toggle('-translate-x-full');
        }