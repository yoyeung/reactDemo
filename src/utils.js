
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
