import { minLength } from "@valibot/valibot";
import { email, object  , pipe , string , nonEmpty} from "valibot";

export const vLoginSchema = object({
        email : pipe(
            string(),
            nonEmpty(),
            email()
        ),
        password : pipe(
            string(),
            nonEmpty(),
            minLength(6)
        )
})