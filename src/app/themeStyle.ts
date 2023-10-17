const themeStyle = {
    H1_STYLE: "text-black dark:text-zinc-300 font-bold text-xl leading-none",
    CHART_TOOLTIP: {
        padding: {
            x: 10,
            y: 8
        },
        boxPadding: 5,
        callbacks: {
            label: (tooltipItem, data) => {
                // Append "SA" to the tooltip's body value
                return 'SA ' + tooltipItem.yLabel;
            },
        },
    }
}

export default themeStyle