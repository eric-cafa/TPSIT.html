<html>

<head>
    <title>

    </title>
</head>

<body>
    <h1>numeri primi in intervallo 1 a 100</h1>
    <button onclick="generaprimi();">generazione numeri</button>
    <div id="out"></div>
    <script>
        function generaprimi() {
            let cont=0;
            for (let i = 1; i <= 100; i++) {
                if (Isprime(i) && i!=1) {
                    document.getElementById('out').innerHTML += "<span>" + i + "* </span>";
                    cont++;

                } else {
                    document.getElementById('out').innerHTML += "<span> " + i +  " </span>";
                }
            }
            document.getElementById('out').innerHTML += "<br>ci sono " + cont + " numeri primi" + "</span>";


        }
        function Isprime(n) {
            let primo = true;
            for (let fattore = 2; fattore <= n / 2 && primo; fattore++) {
                if (n % fattore == 0) {

                    primo = false;
                }
            }
            return primo;
        }
    </script>
</body>

</html>
