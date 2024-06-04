import rehypeInferDescriptionMeta from "rehype-infer-description-meta";
import {findAndReplace} from 'hast-util-find-and-replace'

export function rehypeExcerptPlugin() {
    return function (tree, file ) {
        findAndReplace(tree,[ /#excerpt/gi, {type: 'comment', value: 'excerpt'}])
        rehypeInferDescriptionMeta({comment: 'excerpt'})(tree, file )
        file.data.astro.frontmatter.excerpt = file.data?.meta?.description
    };
  }