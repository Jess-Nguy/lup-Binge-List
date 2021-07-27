# Inspections API Server for Weever Data Sources

## Prerequisites

### Rust compiler

Required cli tools: `rustc` and `cargo`.

One method to install:

```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Useful toolchain extentions

Recommended extension to install that watching and auto-reloading of the application through the use of `cargo watch -x run`. [more details](https://crates.io/crates/cargo-watch)

```sh
cargo install cargo-watch
```

Recommended extension to install that provides `cargo add`, `cargo rm`, and `cargo upgrade` for adding and removing packages against https://crates.io/ [more details](https://crates.io/crates/cargo-edit)

```sh
cargo install cargo-edit
```

Optional extension to install that provides `cargo expand` which outputs pre-processed code such as what macros generate. [more details](https://crates.io/crates/cargo-expand)

```sh
cargo install cargo-expand
```

### Database - NEED TO IMPLEMENT

NEED TO FILL OUT.

### Linting - NEED TO IMPLEMENT

You can run a light formatter with `cargo fmt` or a more stringent linter with `cargo clippy`.

## Running tests - NEED TO IMPLEMENT

```sh
cargo test
```

Builds and runs unit test files.

## Launching a development server - NEED TO IMPLEMENT

- Open a terminal window and navigate to the projects `api` folder
- Build the container by entering

```
cargo build
```

```sh
# to leave running once
cargo run
```

- To build and run in one command (you need the optional Cargo Watch extension mentioned in the above steps) which automatically rebuilds and relaunchs on file changes

```
cargo watch -x run
```

## Producing a production release executable - NEED TO IMPLEMENT

```sh
cargo build --release
```

## Building new docs - NEED TO IMPLEMENT

```sh
sh doc.sh
```

## Building and opening new docs (No Markdown) - NEED TO IMPLEMENT

```sh
cargo doc --no-deps --target-dir doc/ --open
```

## Further Reading

### Rust Language

- [Official Rust Language Book](https://doc.rust-lang.org/book/)
- [Repository of Useful Books](https://github.com/sger/RustBooks)
- Some notes are stored in the [LANGUAGE.md](./LANGUAGE.md) file of this repository

### OData API

- [OData 4.01 Specification](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html)
- [Official OData Resources](https://www.odata.org/documentation/)

### Rust Documenting

- [The rustdoc book: How to write documentation](https://doc.rust-lang.org/rustdoc/how-to-write-documentation.html)
- [The Cargo Book: cargo-doc](https://doc.rust-lang.org/cargo/commands/cargo-doc.html)
