console.log(process.env.FOO)

if (process.env.FOO === "adminadmin") {
  console.log("I could access $FOO")
} else {
  console.log("What's going on?")
}
