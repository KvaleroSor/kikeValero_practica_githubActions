RESULTAT DELS ÚLTIMS TESTS 
 ![Test result badge](https://img.shields.io/badge/test-failure-red)
# GITHUB ACTIONS

### ¿Què son las GitHub Actions?

Les GitHub Actions serveixen per automatizar el fluxe de treball de un projecte
en totes les seues parts, desde les parts inicials com son les idees sobre el 
projecte, fins les parts finals com puga ser el seu desplegament a producció.

Las Github Actions son una plataforma de integración y despliegue continuos 
(CI/CD).

Les GitHub Actions son una plataforma d´integració i desplegament continuo. (CI/CD).

### ¿Per que està composta una GitHub Action?

En una GitHub Action podem encontrar: 

    - Workflows.
    - Jobs.
    - Steps.
    - Actions.
    - Runners.

    · Workflow -> Es el procediment d´automatització què s´agrega a un repositori.
                Pot estar compost d´un o més jobs.
                Els seus llanzadors poden ser "push", "PR", etc.

    · Jobs -> Es el conjunt de "steps" què s´executaran, estos por defecte s´executen
            tots en paralel, pero hi ha la possibilitat de què hi haja jobs que esperen
            a altres jobs para poder executar-se.

    · Steps -> Es la tasca individual què s´executarà dintre d´un job.

               Tipus: 

                + Actions.
                + Scripts (personalitzats).
               
    · Actions -> Son las execucions independents que juntes formen un "Step".

    · Runners -> Es el servidor que te instal·lada l´aplicació d´execució.

---

## Pràctica GitHub Actions.

### Crear un Workflow amb els següents jobs.

#### Primeres instruccións per al nostre Workflow.

- Push: Estem diguent-li al nostre workflow que s´haura d´executar quan l´usuari faça un push.
- Branches: Este push que llançarà aquest workflow serà a la branca "main".

![Primeres instruccions](./img/inici%20workflow.png)

#### Linter Job.



#### Cypress Job.
#### Badged Job.
#### Deploy Job.
#### Notification Job.




    
