import React from "react"

export default function BlogParse(item) {
    return (
    item.tag === "img" ?
    <img className={item.className} src={item.content} referrerPolicy="no-referrer"/>
    :
    React.createElement(
        item.tag,
        {className: item.tag},
        item.content
    ))
}
