import prettybytes from '../../../src/filters'

describe('过滤器 "prettybytes"', () => {
  it('应该正确格式化输出 Bytes, KB, MB, GB, TB', () => {
    expect(prettybytes(1024)).to.equal('1 KB')
    expect(prettybytes(1024 * 1024)).to.equal('1 MB')
    expect(prettybytes(1024 * 1024 * 1024)).to.equal('1 GB')
    expect(prettybytes(1024 * 1024 * 1024 * 1024)).to.equal('1 TB')
    expect(prettybytes(208)).to.equal('208 Bytes')
  })
})

