# typeorm

要注意的是 mysql 里没有 boolean 类型，使用 TINYINT 实现的，用 1、0 存储 true、false。typeorm 会自动把它映射成 true、false。
