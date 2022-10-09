Aprendizaje de Git desde 0. En este README muestro como voy aprendiendo poco a poco los comandos de git bash.

Espero aprender mucho.



//Comandos empleados en el aprendizaje
Brinda ayuda sobre los comandos//

git <comandos>* help

<!-- CONFIGURACION GLOBAL -->
Configura el email y usuario

git config --global user.email elliotgaramendi@gmail.com
git config --global user.name ElliotXLeo
Inicia un nuevo repositorio y crea la carpeta oculta .git

git init
Lista el estado de los archivos 

git status
Agrega todos los archivos pendientes de cambios

git add --all
Captura estado del código y lo almacena en el repositorio local. Posterior a git add *

git commit -m "<descripción>"
Deshace la captura del estado del código

git reset
Abre un editor de texto con el último commit y vuelve a realizar el commit al salir de este.
También es útil para adicionar una modificación.

git commit --amend
Muestra los commit realizados hasta el momento

git log --oneline
Lista todos los commits de forma gráfica

git log --oneline --graph
Lista todos los commits de todas las ramas de forma gráfica tomando como base la rama actual

git log --oneline --graph --all
Cambia a un commit en específico por su código.

git checkout <código>
Cambiamos a un commit en específico por su código con el objetivo de volver a empezar desde ese punto.

git reset --hard <código>
Crea una nueva rama

git branch nombreRama
Nos muestra en que rama estamos y lista las demás

git branch
Nos movemos de la rama actual a una específica

git checkout nombreRama
Eliminar una rama

git branch -d nombreRama
Permite juntar dos ramas, desde la rama principal invocando a la rama que se quiera unir a esta.

git merge nombreRama
Permite juntar dos ramas, pero mantiene la existencia de cada una de forma que se puede ver un gráfico de ramas.

git merge --no-ff develop