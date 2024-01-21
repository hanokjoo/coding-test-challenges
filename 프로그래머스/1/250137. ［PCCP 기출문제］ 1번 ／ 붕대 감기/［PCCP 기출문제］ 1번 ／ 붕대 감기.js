function solution(bandage, health, attacks) {
    let recoveryTime = 0;
    let currentHealth = health;
    const lastAttackTime = attacks[attacks.length - 1][0];
    
    for (let i = 1; i <= lastAttackTime; i++) {
        if (currentHealth < 0) break;
        recoveryTime++;
        if (i === attacks[0][0]) {
            currentHealth -= attacks[0][1];
            attacks.shift();
            recoveryTime = 0;
        } else {
            currentHealth += bandage[1];
            
            if (recoveryTime === bandage[0]) {
                currentHealth += bandage[2];
                recoveryTime = 0;
            }
            
            if (currentHealth > health) currentHealth = health;
        }
    }
    
    return (currentHealth > 0) ? currentHealth : -1;
}