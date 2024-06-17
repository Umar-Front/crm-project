import { Button, Icon } from './style'

export const GenericButton = (props) => {
  const { children, type } = props;

  switch (type) {
    case 'filter':
      return (
        <Button.Filter {...props}>
          <Icon.Filter />
          {children}
        </Button.Filter>
      );
    case 'import': return <Button.Import {...props}>
      <Icon.Import />
      {children}
    </Button.Import>
    case 'add': return <Button.Add {...props}>
      <Icon.Add />
      {children}
    </Button.Add>
    case 'delete': return <Button.Delete {...props}>{children}</Button.Delete>
    case 'save':
    case 'primary': return <Button.Primary {...props}>{children}</Button.Primary>;
    default: return <Button {...props}>{children}</Button>
  }
  return (
    <Button.Primary {...props}>{children}</Button.Primary>
  )
}

export default GenericButton