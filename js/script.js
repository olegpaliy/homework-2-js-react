let hrivna = +prompt('скікі бабосиків у тебе є?');
const usd = 0.025;
const eur = 0.03;
const oil = 1150;
const gold = 1775;
if (hrivna && !isNaN(hrivna) && typeof(hrivna) !== undefined) {
    alert(`${hrivna} гривень це ${usd.toFixed(2)} $, ${eur.toFixed(2)} €, ${oil.toFixed(2)} барелів, ${gold.toFixed(2)} грамів золота.`)
} else {
    alert('ви ввели 0, введіть норм число');
}
