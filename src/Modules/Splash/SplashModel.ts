export const simulateAppLoad = (): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
};
