# Task: Restructure and Fix the User Guide

You are working on an existing user guide in this repository. Apply the three improvements below, then report what changed.

## Hard rules

- **Do NOT run any git command.** No `git status`, `git diff`, `git add`, `git commit`, `git checkout`, `git stash`, or anything else that starts with `git`. Do not stage, commit, branch, or revert anything.
- Edit files in place. Do not delete images. Move or re-reference them instead.
- Do not invent screenshots. If an image you need does not exist, use a clearly marked placeholder (see "Missing images") and list it in your final report.
- Keep the existing writing style, heading style, and image-path conventions used by the guide.

## Step 0: Understand the guide before changing it

1. Find the guide's source files (markdown, MDX, HTML, or similar) and the folder that holds its images. Use file search and read tools only.
2. Read the whole guide once. Write down, for yourself, the current order of sections and which images appear in each.
3. Identify these sections by name or by content, even if the headings differ slightly:
   - The **Activation** section
   - The dedicated **Admin Configuration** section (admin config / admin settings)
   - The **Magic Content** section (AI content generation feature)
   - The **Seller** content generation section (for example: creating or adding a product)
   - The **Admin** content generation section (for example: creating or adding a product as admin)

If any of these cannot be found, stop and tell the user which one is missing instead of guessing.

## Improvement 1: Move the admin config image to the Admin Configuration section

**Problem:** The Activation section contains an image that shows the admin configuration screen. That image belongs in the dedicated Admin Configuration section.

**Do this:**
1. Find every image in the Activation section that shows the admin configuration screen or settings.
2. Remove the image reference from Activation.
3. Add it to the Admin Configuration section, at the step it illustrates, with its caption or alt text adjusted if needed.
4. In Activation, keep the text steps but replace any now-orphaned wording such as "as shown below" with a short cross-reference such as "see Admin Configuration".
5. Check that Activation still reads correctly and that no broken image links remain.

## Improvement 2: Fold Magic Content into the Seller and Admin flows

**Problem:** Magic Content is documented as a separate, standalone section. It should instead appear inside the content generation flow for each role, because that is where users actually use it.

**Target flow (write this for both Seller and Admin):**

1. Start at **Product > Create New** (use the exact menu labels the guide already uses for each role).
2. Open the **Magic Content** window.
3. Fill in the **prompt** and select the **attributes**.
4. Click **Generate**.
5. Review the **generated content** that is shown.

**Do this:**
1. Add the Magic Content steps above as a sub-flow inside the Seller content generation section, with a screenshot for each step where one exists.
2. Do the same inside the Admin content generation section.
3. Reuse the existing Magic Content screenshots. If the seller and admin screens differ, use the matching screenshot for each role. If they look the same, reuse one image in both places.
4. Carry over any useful details from the standalone Magic Content section (what each attribute does, tips for good prompts, limits, notes) into the two role sections. Do not duplicate long text word for word; keep each role's version short and role-specific.
5. After everything is moved, remove the standalone Magic Content section and its entry in any table of contents, sidebar, or navigation file. Fix every link that pointed to it so it now points to the relevant Seller or Admin section.

### Missing images

If a step in either role's flow has no screenshot (for example, the Seller "Generate" result, or the Admin prompt and attributes window):
- Insert a placeholder at that spot in this form: `<!-- TODO-IMAGE: <role> - <step name> - <suggested filename> -->` plus a visible line in the guide such as `*(Screenshot to be added)*`.
- Do not copy an unrelated image as a stand-in.
- List every missing image in the final report with the suggested filename, so the user can supply it.

## Improvement 3: Make the guide's flow systematic

**Problem:** The current order is hard to follow. Reorder and tidy it so a new reader can go from start to finish without jumping around.

**Target order (adapt names to the guide's real sections, keep only what exists):**

1. **Introduction / Overview**: what the product is, who the guide is for (admin and seller).
2. **Prerequisites**: what is needed before starting.
3. **Activation**: only the activation steps.
4. **Admin Configuration**: all admin setup, including the images moved in Improvement 1.
5. **Admin Guide**: day-to-day admin tasks, including product creation with Magic Content.
6. **Seller Guide**: day-to-day seller tasks, including product creation with Magic Content.
7. **Troubleshooting / FAQ / Notes** (if the guide has them).

**Rules for the restructure:**
- Setup comes before usage. Admin tasks come before seller tasks if sellers depend on admin setup.
- Use one consistent heading hierarchy (H1 for the guide title, H2 for main sections, H3 for subsections).
- Number steps within each procedure (1, 2, 3...). One action per step.
- Put the screenshot directly under the step it illustrates, with meaningful alt text.
- Add a short table of contents at the top that matches the final order.
- Make the Admin and Seller sections mirror each other in structure where the tasks are the same, so readers can compare easily.
- Remove duplicated explanations. Where two sections say the same thing, keep it in the earlier one and cross-reference it from the later one.
- Do not change the product facts, menu names, or button labels unless they are clearly inconsistent within the guide. If you find an inconsistency, list it in the report instead of silently changing it.

## Verification checklist (do this before finishing)

- [ ] No admin-config image remains in Activation; it appears in Admin Configuration.
- [ ] There is no standalone Magic Content section, and no leftover link or navigation entry points to it.
- [ ] Both Seller and Admin flows contain: Create New > Magic Content window > prompt and attributes > Generate > generated content.
- [ ] Every image path in the guide resolves to an existing file (check with file search or read tools, not git).
- [ ] Table of contents order matches the actual section order.
- [ ] Heading levels are consistent and steps are numbered.
- [ ] No git command was run.

## Final report format

Reply with a short report containing:
1. The new section order (as a list).
2. Which images were moved, from where to where.
3. Which images are missing (role, step, suggested filename) for the user to provide.
4. Any inconsistencies or open questions you noticed but did not change.
