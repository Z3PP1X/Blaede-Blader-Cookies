Verwendung von JavaScript für den Cookie-Banner

Verwendungsschritte:

    Einrichtung:
        Fügen Sie diesen JavaScript-Code im Skriptbereich Ihrer Website ein.

    HTML-Elemente:
        Der Code geht davon aus, dass die folgenden HTML-Elemente mit entsprechenden id-Attributen vorhanden sind:
            cookieBanner: Der Container für den gesamten Cookie-Banner.
            acceptBtn: Die Schaltfläche, die Benutzer klicken, um Cookies zu akzeptieren.
            declineBtn: Die Schaltfläche, die Benutzer klicken, um Cookies abzulehnen.

    Funktionalität:
        Der Code überprüft den gespeicherten Cookie-Status (cookieStatus), um festzustellen, ob der Benutzer Cookies zuvor akzeptiert oder abgelehnt hat.
        Wenn der Status "akzeptiert" ist, wird der cookieBanner ausgeblendet.
        Wenn der Status "abgelehnt" ist, wird der cookieBanner ebenfalls ausgeblendet.
        Die Funktion getCookie ruft den Wert eines Cookies anhand seines Namens ab.
        Die Funktion setCookie setzt ein Cookie mit einem angegebenen Namen, Wert und Ablaufdatum.

    Schaltflächen-Listener:
        Die Funktion acceptCookies wird ausgelöst, wenn auf die Schaltfläche acceptBtn geklickt wird. Sie setzt ein Cookie mit dem Status "akzeptiert" und einem Ablaufdatum von zwei Monaten. Zusätzlich wird der cookieBanner ausgeblendet und das Ereignis "cookie_accepted" in der Analytik erfasst.
        Die Funktion declineCookies wird ausgelöst, wenn auf die Schaltfläche declineBtn geklickt wird. Sie setzt ein Cookie mit dem Status "abgelehnt" und einem Ablaufdatum in der Vergangenheit (wodurch das Cookie effektiv abläuft). Der cookieBanner wird ausgeblendet, und das Ereignis "cookie_declined" wird in der Analytik erfasst.
        Schaltflächen-Listener werden mithilfe der addEventListener-Methode an acceptBtn und declineBtn angehängt.