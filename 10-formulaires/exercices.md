# Exercices formulaire

## 1. Vérificateur de mot de passe

- Doit faire plus de 6 caractères
- Doit contenir au moins 1 chiffre
- Les deux inputs doivent correspondre

```html
<form>
    <p>
        <label for="mdp1">Saisissez le mot de passe</label> :
        <input type="password" name="mdp1" id="mdp1" required>
    </p>
    <p>
        <label for="mdp2">Confirmez le mot de passe</label> :
        <input type="password" name="mdp2" id="mdp2" required>
    </p>

    <input type="submit" value="Envoyer">
</form>

<p id="infoMdp"></p>
```