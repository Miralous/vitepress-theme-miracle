export const css = (template: TemplateStringsArray, ...values: any[]) => {
  const css = template
    .reduce(
      (result, str, i) => result + str + (i < values.length ? values[i] : ''),
      '',
    )
    .split('\n')
    .map(line => line.trim())
    .join('')
  const style = document.createElement('style')
  style.innerHTML = css
  return style
}
