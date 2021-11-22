import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2898006_ryak076k1bg.js'],
});

function Icon({ type, className, onClick, style, dataItems }) {
  return (
    <IconFont
      type={type}
      className={className}
      onClick={onClick}
      style={style}
      data-items={dataItems}
    />
  );
}

export default Icon;
