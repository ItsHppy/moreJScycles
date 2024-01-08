let obj = {
    name: "Филипп",
    age: 14,
    dateOfBirth: "24.05.2009",
    student: true,
    languages: ["Английский", "Русский", "Белорусский", "Польский"]
}
    const main = document.querySelector("#name");
    main.innerHTML = obj.name;

    const main2 = document.querySelector("#age");
    main2.innerHTML = obj.age;

    const main3 = document.querySelector("#dateOfBirth");
    main3.innerHTML = obj.dateOfBirth;

    const main4 = document.querySelector("#student");
    main4.innerHTML = obj.student;

    const main5 = document.querySelector("#languages");
    main5.innerHTML = obj.languages;