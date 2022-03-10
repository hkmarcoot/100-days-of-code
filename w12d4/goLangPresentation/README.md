## Project

we're looking at some new languages and libraries:

- Python
- Go
- C#
- Ruby
- php
- Kaboom.js
- Socket.io
- Vue
- SvelteKit

## implement something with the choice you make in your team:

- have a presentation about the subject you have in your team
- The choices are below. Remember, we're not expecting both of the above, just one or the other.

## Our chice:

Language: GO

## How to start:

link: https://go.dev/doc/tutorial/getting-started

Open a command prompt and cd to your home directory.

cd %HOMEPATH%
Create a hello directory for your first Go source code.
For example, use the following commands:

```sh
mkdir hello
cd hello
```

To enable dependency tracking for your code by creating a go.mod file, run the go mod init command, giving it the name of the module your code will be in. The name is the module's module path.

```sh
$ go mod init example/hello
```

Paste the following code into your hello.go file and save the file.

```sh
package main

import "fmt"

func main() {
fmt.Println("Hello, World!")
}
```

Run your code to see the greeting.

```sh
$ go run .
Hello, World!
```
