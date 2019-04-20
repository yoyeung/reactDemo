
export const dataSimplifer = ({
  id,
  category,
  link,
  title,
  summary,
  ...data
}) => ({
  id: id.attributes['im:id'],
  category: {
    id: category.attributes['im:id'],
    label: category.attributes.label
  },
  auth: data['im:artist'].label,
  name: data['im:name'].label,
  title: title.label,
  summary: summary.label,
  link: link.attributes.href,
  images: data['im:image'].map((img) => (
    {
      height: img.attributes.height,
      href: img.label
    }
  ))
});

export const filterFunction = (search) => (item) => {
  const {
    title,
    category,
    summary,
    auth
  } = item;
  return title.toLowerCase().includes(search) ||
    auth.toLowerCase().includes(search) ||
    category.label.toLowerCase().includes(search) ||
    summary.toLowerCase().includes(search)
}