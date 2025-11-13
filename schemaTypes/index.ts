import type {SchemaTypeDefinition} from 'sanity'
import project from './project'
import resume from './resume'
import album from './album'

export const schemaTypes: SchemaTypeDefinition[] = [project, resume, album]
