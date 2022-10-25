# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## Unreleased

## [1.0.0] - 2022-10-25

### Added
- This CHANGELOG file (retroactive)
- .editorconfig file

## Changed
- Test runner from AVA to Jest
- Renamed .js files .mjs so tests would run
- Updated dependencies
- Cleaned up README

## Removed
- Benchmarks, as they're no longer useful
- Strong random number generator, as it's overkill adding complexity
- Cleaned up dependencies


## [0.3.2] - 2019-11-06

### Added
- `fischer.random()` and `fischer.randomID()` (85b6dcf)
- API compatible `random…` functions to `lookup.js` (829d46d)
- Benchmark (3ba5747)

### Changed
- Documentation and examples (7c49a8b)

### Fixed
- Tests (87b444b)
- Examples for validation functions (9df819d)

### Deprecated
- `generate()` is now deprecated (3788933)


## [0.3.1] - 2019-11-06

### Changed
- Renamed validation functions to `isValid…`

This _should_ cause a major version bump, but nobody's using this library yet anyway. And what's the point of rules if you can't break them? Guidelines > Rules.


## [0.3.0] - 2019-11-06
### Added
- Validation of input (30bf090)
- AVA test runner and tests (553a70d)
- Debug config for VSCode (e8a9665)
- MIT license (d67f374)

### Changed
- Improved documentation (2a9b407)


[1.0.0]: https://github.com/joakim/fischer960/compare/0.3.2...1.0.0
[0.3.2]: https://github.com/joakim/fischer960/compare/0.3.1...0.3.2
[0.3.1]: https://github.com/joakim/fischer960/compare/0.3.0...0.3.1
[0.3.0]: https://github.com/joakim/fischer960/compare/0.2.0...0.3.0
[0.2.0]: https://github.com/olivierlacan/keep-a-changelog/releases/tag/0.2.0
