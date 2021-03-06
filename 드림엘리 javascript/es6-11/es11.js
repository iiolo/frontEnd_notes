/**
 * Optional chaining
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
{
    const person1 = {
        name: 'Laura',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob',
            },
        },
    };

    const person2 = {
        name: 'Bob',
    };

    //π©π©π©π©π©
    {
        function printManager(person) {
            console.log(person.job.manager.name);
        }

        printManager(person1);
        //printManager(person2);//managerκ° μ‘΄μ¬νμ§ μκΈ° λλ¬Έμ μλ¬ λ©μΈμ§ λ°μ
    }

    // π©π©π©
    {
        function printManager(person) {
            console.log(
                person.job
                    ? person.job.manager
                        ? person.job.manager.name
                        : undefined
                    : undefined
            );
        }

        console.log(person1);
        console.log(person2);
    }

    //π©
    {
        function printManager(person) {
            console.log(
                person.job && person.job.manager && person.job.manager.name
            );
        }

        printManager(person1);
        printManager(person2);
    }

    console.clear();
    //β¨
    function printManager(person) {
        console.log(person.job?.manager?.name);
    }

    printManager(person1);
    printManager(person2);
}

/**
 * Nullish Coalescing Operator
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 */
{
    //Logical OR operator
    // false : false, '', 0, -0, undefined, null
    //π©
    {
        const name = 'Laura';
        const userName = name || 'Guest';
        console.log(userName);
    }
    {
        const name = '';
        const userName = name || 'Guest';
        console.log(userName);

        const num = 0;
        const message = num || 'undefined';
        console.log(message);
    }

    //β¨
    {
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName);

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message);
    }
}
